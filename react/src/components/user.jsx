const User=({name,department,skills})=>{
    return (
    <div>
        <h1>I am {name} from {department} department</h1>
        <ol>
            {skills.map((skill)=>(
                <li>{skill}</li>
            ))}
        </ol>
    </div>
    )
}
export default User