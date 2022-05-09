import Dette from "./Dette"
const Dettes = ({dettes}) => {
    return (
    
        <>
            {dettes.map((dette) => (
                <Dette key={dette.id} 
                dette={dette}/>
            ))}
        </>
    )
}

export default Dettes