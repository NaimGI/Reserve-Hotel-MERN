import "./Mail.css"

const Mail = () => {
    return (
        <div className="Mail">
            <h1 className="mailItem">Send A Email</h1>
            <span className="MailDesc">Your need to subscribe to get More Information of Hotel</span>
            <div className="MailContent">
                <input type="email" placeholder="Pleaze enter your email " />
                <button>Send</button>
            </div>
            
        </div>
    );
}

export default Mail;
