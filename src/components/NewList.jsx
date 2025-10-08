import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";

function NewList() {
  const { t } = useContext(LanguageContext);
  return (
    <div className="new-list">
      <Link to="/new" className="button-add" type="button" title={t('addNote')}>
        {t('addNote')}
      </Link>
    </div>
  );
}
NewList.propTypes = {
};

export default NewList;