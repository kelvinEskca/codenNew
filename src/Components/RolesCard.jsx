const RolesCard = ({title,paragraph,img}) => {
    return (
        <div className="box">
            <img src={img} alt="logo" />
            <div className="text-box">
                <h3 className="heading">{title}</h3>
                <p className="paragraph">{paragraph}</p>
            </div>
        </div>
    );
}
 
export default RolesCard;