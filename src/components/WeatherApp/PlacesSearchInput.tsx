import { useAutocompleteSuggestions } from '@/hooks/use-autocomplete-suggestions';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { XCircleIcon } from '@primer/octicons-react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { debounce } from 'lodash-es';
import { FormEvent, useCallback, useMemo, useState } from 'react';

type PlaceSearchInputProps = {
  onPlaceSelect: (place: google.maps.Place) => void;
};

const Input = styled.input`
  border: 2px solid #333;
  border-radius: 4px;
  background-color: #f4f6f8;
  color: #111;
  padding: 8px 4px;
  height: 45px;
  width: 100%;
  font-size: 16px;
  padding-right: 40px;
  margin-right: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: 1px solid #222;
    box-shadow: 1px 1px 1em rgba(100, 100, 100, 0.3);
  }
`;

// const Button = styled.button`
//   color: #f4f6f8;
//   padding: 6px 10px;
//   border-radius: 4px;
//   font-size: 16px;
//   background-color: var(--color-indigo-600);
// `;

const Results = styled.div`
  border: 2px solid #333;
  background-color: white;
  margin-top: 2px;
  margin-bottom: 4px;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: 8px 8px 20px -6px rgba(100, 100, 100, 0.4);
  position: absolute;
  left: 0;
  right: 0;
  ul {
    li {
      padding: 8px;
      border-bottom: 2px solid #333;

      &:hover {
        background-color: rgba(244, 246, 248, 1);
        cursor: pointer;
      }

      &:last-child {
        border-bottom: 0px;
      }
    }
  }
`;

const searchComponent = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-center;
  align-items: flex-start;
  width: 90%;
  margin: 0px auto;
  padding: 8px 0;

  & > div {
    flex-grow: 2;
    position: relative;

    & > .input-clear {
      position: absolute;
      top: 10px;
      right: 8px;

      &:hover svg {
        color: var(--color-red-600);
      }
    }
  }

  & > button {
    flex-grow: 0;
  }
`;

export default function PlacesSearchInput({
  onPlaceSelect,
}: PlaceSearchInputProps) {
  const places = useMapsLibrary('places');

  const [inputValue, setInputValue] = useState<string>('');
  const [acsValue, setAcsValue] = useState<string>('');
  const [showList, setShowList] = useState<boolean>(false);

  const { suggestions, resetSession } = useAutocompleteSuggestions(acsValue, {
    includedPrimaryTypes: ['locality', 'administrative_area_level_1'],
  });

  const handleSearch = useMemo(() => {
    return debounce((searchTerm) => {
      setAcsValue(searchTerm);
      setShowList(true);
    }, 300); // Debounce for 300 milliseconds
  }, []);

  const handleInputChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const searchValue = (event.target as HTMLInputElement).value;
      setInputValue(searchValue);
      handleSearch(searchValue);
    },
    [],
  );

  const handleSuggestionClick = useCallback(
    async (suggestion: google.maps.places.AutocompleteSuggestion) => {
      if (!places) return;
      if (!suggestion.placePrediction) return;

      const place = suggestion.placePrediction.toPlace();

      await place.fetchFields({
        fields: ['displayName', 'location', 'formattedAddress'],
      });

      const pl: google.maps.Place & { displayName?: string } = place.toJSON();

      setInputValue(suggestion.placePrediction.text.text);

      setShowList(false);
      // setHasUserTyped(false);
      // setFocused(false);
      resetSession();

      onPlaceSelect(pl);
    },
    [places],
  );

  // const handleFocus = useCallback(() => {
  //   setFocused(true);
  // }, []);

  // const handleBlur = useCallback(() => {
  //   setFocused(false);
  // }, []);

  const handleClearInput = useCallback(() => {
    setInputValue('');
    setShowList(false);
    // setHasUserTyped(false);
    // resetSession();
  }, [resetSession]);

  return (
    <div css={searchComponent}>
      <div id="input-wrapper">
        <Input
          onChange={(evt) => {
            handleInputChange(evt);
          }}
          value={inputValue}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          name="search"
          type="text"
          placeholder="search city ..."
        />
        {inputValue.length > 0 && (
          <button className="input-clear" onClick={handleClearInput}>
            <XCircleIcon size={24} />
          </button>
        )}

        {showList && suggestions.length > 0 && (
          <Results>
            <ul className="custom-list">
              {suggestions.map((suggestion, index) => {
                return (
                  <li
                    key={index}
                    className="custom-list-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.placePrediction?.text.text}
                  </li>
                );
              })}
            </ul>
          </Results>
        )}
      </div>
      {/* <Button>Search</Button> */}
    </div>
  );
}
