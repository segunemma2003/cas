


function MiniSide(props){
    return (
        <>
        <div className="prce-side1 d-flex flex-column align-items-start gap-3 text-nowrap">
            <div>{props.heading}</div>
            {
                props.body.map((items,index)=>(
                    <div className="d-flex justify-content-start items-p">
                        {items}
                    </div>
                ))
            }
        </div>
        <hr className="bg-light-cu"/>
        </>
    )
}

export default MiniSide;