const Box = ({count,title}) => {
    return (
        <div className="box">
            <h3 className="heading">{count}</h3>
            <p className="paragraph">{title}</p>
        </div>
    );
}
 
export default Box;