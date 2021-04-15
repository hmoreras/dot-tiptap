export class dotContentTypeService {
    static get() {
        return fetch('https://demo.dotcms.com/api/v1/contenttype', {
            headers: {
                Authorization: 'Basic YWRtaW5AZG90Y21zLmNvbTphZG1pbg=='
            }
        })
            .then((response) => response.json())
            .then((data) => data.entity);
    }
}
