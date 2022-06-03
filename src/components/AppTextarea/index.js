// Imports
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetInput } from '../../actions/appLvl';

// Components

// Styling
// import './style.scss';

const AppTextarea = (props) => {
  const dispatch = useDispatch();
  const { nameSpace, name } = props;
  // console.log("APPTEXTAREA", nameSpace, name);
  const allInputs = useSelector((state) => state.input[nameSpace]);
  // console.log(allInputs[name]);
  let inputValue;
  if (allInputs) inputValue = allInputs[name];

  /* we set properties that textarea can use */
  const usableProps = { ...props };
  delete usableProps.nameSpace;

  const handleSetValue = (e) => {
    // console.log("content", e.target.value);
    dispatch(actionSetInput(nameSpace, name, e.target.value));
  };

  return (
    <textarea {...usableProps} onChange={handleSetValue} value={inputValue} />
  );
};

export default AppTextarea;
