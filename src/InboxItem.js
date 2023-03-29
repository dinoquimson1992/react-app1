import './InboxItem.css';

function InboxItem(props) {
    return (
      <div className="inbox-item">
          <p>{props.message}...</p>
      </div>
    );
  }
  
  export default InboxItem;