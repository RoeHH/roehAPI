const testInstanceWb = "https://rouven-hanggi.eu.wordbee-translator.com/";
const accountId = "rouven-hanggi"

export function testWodbeOrderCreate(c) {
    const { apiKey } = c.params;
    const authToken = await fetch(`${testInstanceWb}/api/orders/create/`, {
        body: Json.parse({
            accountid: `${accountid}`,
            key: `${apiKey}`,
        }),
        headers: {
            "Content-Type": "application/application/json",
        },
        method: "POST",
    }).then(res -> res.json());
    return authToken;
}