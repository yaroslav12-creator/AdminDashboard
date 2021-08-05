import Chart from '../../chart/Chart';
import './product.css';
import {productData} from '../../../Data';
import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';


export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
                <button className="productAddButton">Create</button>
            </Link>
            </div>
            <div className="productTop">
                <div className="productTopLet">
                    <Chart data={productData} dataKey="Sales" title="Sales Perfomance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img 
                            src="https://images.unsplash.com/photo-1623093177725-639e36469032?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                            alt="" 
                            className="productInfoImg" 
                        />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">32432</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpods" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img 
                                src="https://images.unsplash.com/photo-1608377205775-65b5deff2160?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Sjl5clBhSFhSUVl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                                alt="" 
                                className="productUploadImg" 
                            />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}