const ClockTime = () => {

  const now = new Date();

  return <p className="lead">This is the current time : {now.toLocaleDateString()} - {now.toLocaleTimeString()}</p>
}

export default ClockTime;