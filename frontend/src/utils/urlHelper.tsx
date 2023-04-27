interface UrlUtilsStaticInterface {
    objectToQueryString(object: RequestUrl): string
}

type RequestUrl = {
    [x: string]: any
}

const UrlUtils: UrlUtilsStaticInterface = class {
    static objectToQueryString(object: RequestUrl): string {
        return Object.keys(object).map(key => key + '=' + String(object[key])).join('&')
    }
}

export default UrlUtils
