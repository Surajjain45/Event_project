import './register_event.css'

export default function Sidebar({classn, index, title}){

    return (
        <>
          {/* <div className={CurrentIndex === 1 ? 'active' : ''}> */}
          <div className={`${classn}`}>
      <div className="step">
        <div className="circle">{index}</div>
        <div className="step-content">
          <span>Step {index}</span>
          <b>{title}</b>
        </div>
      </div>
      </div>
      </>
    );
}

