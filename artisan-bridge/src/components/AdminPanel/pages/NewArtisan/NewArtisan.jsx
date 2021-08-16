import "./NewArtisan.scss"

export default function NewArtisan() {
    return (
        <div className="newArtisan">
            <h1 className="newArtisanTitle">New Artisan</h1>
            <form action="" className="newArtisanForm">
                <div className="newArtisanItem">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="First Name" />
                </div>
                <div className="newArtisanItem">
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="newArtisanItem">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder="Phone Number" />
                </div>
                <div className="newArtisanItem">
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder="Location" />
                </div>
                <div className="newArtisanItem">
                    <label htmlFor="">Type of Service</label>
                    <input type="text" placeholder="Type of Service" />
                </div>
            </form>
            <button className="createArtisan">Create</button>
        </div>

    )
}