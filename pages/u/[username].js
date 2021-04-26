export default function User(){
    return <div>Username is here</div>
}

User.getInitialProps = async () => {
    const user = {
        name: "anselme"
    }
}
