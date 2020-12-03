/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export interface IClient {
    /**
     * @return Success
     */
    itemsAll(): Promise<ItemsObject[]>;
    /**
     * @return Success
     */
    items(id: number): Promise<ItemsObject[]>;
    /**
     * @param itemID (optional) 
     * @param name (optional) 
     * @param stockCount (optional) 
     * @param price (optional) 
     * @param description (optional) 
     * @param token (optional) 
     * @return Success
     */
    create(itemID: number | undefined, name: string | null | undefined, stockCount: number | undefined, price: number | undefined, description: string | null | undefined, token: string | null | undefined): Promise<void>;
    /**
     * @param itemID (optional) 
     * @param name (optional) 
     * @param stockCount (optional) 
     * @param price (optional) 
     * @param description (optional) 
     * @param token (optional) 
     * @return Success
     */
    update(itemID: number | undefined, name: string | null | undefined, stockCount: number | undefined, price: number | undefined, description: string | null | undefined, token: string | null | undefined): Promise<void>;
    /**
     * @param token (optional) 
     * @param id (optional) 
     * @return Success
     */
    delete(token: string | null | undefined, id: number | undefined): Promise<void>;
    /**
     * @param body (optional) 
     * @return Success
     */
    isAdmin(body: string | null | undefined): Promise<boolean>;
}

export class Client implements IClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @return Success
     */
    itemsAll(): Promise<ItemsObject[]> {
        let url_ = this.baseUrl + "/Items";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processItemsAll(_response);
        });
    }

    protected processItemsAll(response: Response): Promise<ItemsObject[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(ItemsObject.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ItemsObject[]>(<any>null);
    }

    /**
     * @return Success
     */
    items(id: number): Promise<ItemsObject[]> {
        let url_ = this.baseUrl + "/Items/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processItems(_response);
        });
    }

    protected processItems(response: Response): Promise<ItemsObject[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(ItemsObject.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ItemsObject[]>(<any>null);
    }

    /**
     * @param itemID (optional) 
     * @param name (optional) 
     * @param stockCount (optional) 
     * @param price (optional) 
     * @param description (optional) 
     * @param token (optional) 
     * @return Success
     */
    create(itemID: number | undefined, name: string | null | undefined, stockCount: number | undefined, price: number | undefined, description: string | null | undefined, token: string | null | undefined): Promise<void> {
        let url_ = this.baseUrl + "/Items/create";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (itemID === null || itemID === undefined)
            throw new Error("The parameter 'itemID' cannot be null.");
        else
            content_.append("ItemID", itemID.toString());
        if (name !== null && name !== undefined)
            content_.append("Name", name.toString());
        if (stockCount === null || stockCount === undefined)
            throw new Error("The parameter 'stockCount' cannot be null.");
        else
            content_.append("StockCount", stockCount.toString());
        if (price === null || price === undefined)
            throw new Error("The parameter 'price' cannot be null.");
        else
            content_.append("Price", price.toString());
        if (description !== null && description !== undefined)
            content_.append("Description", description.toString());
        if (token !== null && token !== undefined)
            content_.append("Token", token.toString());

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCreate(_response);
        });
    }

    protected processCreate(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * @param itemID (optional) 
     * @param name (optional) 
     * @param stockCount (optional) 
     * @param price (optional) 
     * @param description (optional) 
     * @param token (optional) 
     * @return Success
     */
    update(itemID: number | undefined, name: string | null | undefined, stockCount: number | undefined, price: number | undefined, description: string | null | undefined, token: string | null | undefined): Promise<void> {
        let url_ = this.baseUrl + "/Items/update";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (itemID === null || itemID === undefined)
            throw new Error("The parameter 'itemID' cannot be null.");
        else
            content_.append("ItemID", itemID.toString());
        if (name !== null && name !== undefined)
            content_.append("Name", name.toString());
        if (stockCount === null || stockCount === undefined)
            throw new Error("The parameter 'stockCount' cannot be null.");
        else
            content_.append("StockCount", stockCount.toString());
        if (price === null || price === undefined)
            throw new Error("The parameter 'price' cannot be null.");
        else
            content_.append("Price", price.toString());
        if (description !== null && description !== undefined)
            content_.append("Description", description.toString());
        if (token !== null && token !== undefined)
            content_.append("Token", token.toString());

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * @param token (optional) 
     * @param id (optional) 
     * @return Success
     */
    delete(token: string | null | undefined, id: number | undefined): Promise<void> {
        let url_ = this.baseUrl + "/Items/delete?";
        if (token !== undefined && token !== null)
            url_ += "token=" + encodeURIComponent("" + token) + "&";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (id === null || id === undefined)
            throw new Error("The parameter 'id' cannot be null.");
        else
            content_.append("id", id.toString());

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDelete(_response);
        });
    }

    protected processDelete(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    isAdmin(body: string | null | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/Items/is-admin";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processIsAdmin(_response);
        });
    }

    protected processIsAdmin(response: Response): Promise<boolean> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<boolean>(<any>null);
    }
}

export class ItemsObject implements IItemsObject {
    token?: string | undefined;
    itemID?: number;
    name?: string | undefined;
    stockCount?: number;
    price?: number;
    description?: string | undefined;

    constructor(data?: IItemsObject) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.token = _data["token"];
            this.itemID = _data["itemID"];
            this.name = _data["name"];
            this.stockCount = _data["stockCount"];
            this.price = _data["price"];
            this.description = _data["description"];
        }
    }

    static fromJS(data: any): ItemsObject {
        data = typeof data === 'object' ? data : {};
        let result = new ItemsObject();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["token"] = this.token;
        data["itemID"] = this.itemID;
        data["name"] = this.name;
        data["stockCount"] = this.stockCount;
        data["price"] = this.price;
        data["description"] = this.description;
        return data; 
    }
}

export interface IItemsObject {
    token?: string | undefined;
    itemID?: number;
    name?: string | undefined;
    stockCount?: number;
    price?: number;
    description?: string | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    throw new SwaggerException(message, status, response, headers, result);
}