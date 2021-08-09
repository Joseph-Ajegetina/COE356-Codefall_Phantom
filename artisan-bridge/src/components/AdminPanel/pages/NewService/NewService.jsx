import "./NewService.scss"
import PublishIcon from '@material-ui/icons/Publish';

export default function NewService() {
    return (
        <div className="newService">
              <h1 className="newArtisanTitle">New Service</h1>
            <form action="" className="newArtisanForm">
                <div className="newArtisanItem">
                    <label htmlFor="">Name of Service</label>
                    <input type="text" placeholder="Electronics" />
                </div>
                <div className="newArtisanItem">
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder="Some Text" />
                </div>
                <div className="newArtisanImg">
                    <label>Image</label>
                    <input type="file" id="file"/>
                </div>
            </form>
            <button className="createArtisan">Create</button>
        </div>
    )
}
