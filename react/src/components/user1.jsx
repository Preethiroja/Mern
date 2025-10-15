const User1=({projects})=>{
    return (
    <div>
        <h1>Projects:</h1>
        <ol>
            {projects.map((project)=>(
                <li>{project}</li>
            ))}
        </ol>
    </div>
    )
}
export default User1;