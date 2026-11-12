import { Bookmark} from 'lucide-react';
const Card = ({data}) => {
    console.log(data)
    return (<>
        <div key={data.key} style={{ color: "black",display:'flex',flexDirection:"row" }}>
            <div className="card">
                <div className="top">
                    <img src={data.img} alt="" />
                    <button className='save'>save <Bookmark size={14} /></button>
                </div>
                <div className="center">
                    <h3>{data.company} <span style={{ fontSize: "11px", fontWeight: "300" }}>{data.timeAgo}</span></h3>
                    <h2>{ data.title}</h2>
                    <div className='tag'>
                        <h4>{ data.employmentType}</h4>
                        <h4>{ data.experienceLevel}</h4>
                    </div></div>
                <div className="bottom">
                    <div className='bottomText'>
                        <h4>{ data.salary}</h4>
                        <p>{ data.location}</p>
                    </div>
                    <button className='applyBtn'>Apply Now</button>
                </div>




            </div>

        </div>
    </>
    )
}

export default Card