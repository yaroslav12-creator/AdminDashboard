import { Publish } from '@material-ui/icons';
import './newProduct.css';

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>
                        Upload Image
                        <Publish />
                    </label>
                    <input type="file" id="file" style={{display: "none" }}/>
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
}