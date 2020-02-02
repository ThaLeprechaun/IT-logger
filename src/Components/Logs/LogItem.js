import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteLog, setCurrent } from '../../actions/logAction';

function LogItem({log, deleteLog, setCurrent}) {
  function onDelete() {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted'})
  }
  return (
    <li>
      <div>
        <a href='#edit-log-modal' className={`modal-trigger ${log.attention ? 'red-text':'blue-text'}` } onClick={() => setCurrent(log)}>
          {log.message}
          </a>
          <br />
          <span className='grey-text'>
            <span className="black-text">ID #{log.id}</span> last updated by {''}
            <span className="black-text">{log.tech}</span> on{' '}
            <Moment format='MMMM DD YYYY, h:mm:ss a'>{log.date}</Moment>
          </span>
          <a href="#!" onClick={onDelete} className="secondary-content">
            <i className="material-icons grey-text">delete</i>
          </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.object.isRequired,
  setCurrent: PropTypes.object.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
