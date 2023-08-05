import { ButtonContainer, List } from './Buttons.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, updateState }) => {
  return (
   
          <div>
            <List>
              {options.map(option => {
                return (
                  <li key={option}>
                    <ButtonContainer type="button" onClick={() => updateState(option)}>
                      {option}
                    </ButtonContainer>
                  </li>
                );
              })}
            </List>
          </div>
        );
      }

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  updateState: PropTypes.func.isRequired,
};