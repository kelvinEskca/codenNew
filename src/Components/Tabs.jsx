const Tabs = ({count,title}) => {
    return (
        <div className="box">
            <h3 className="heading">{title}</h3>
            <div className="count-box">
                <h3 className="heading">{count}</h3>
            </div>
        </div>
    );
}
 
export default Tabs;