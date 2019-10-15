var baseUrl = "http://eurolottodrawing.azurewebsites.net/api/drawings"

function convertToDrawing(backendDrawing) {
    var newDrawing = {};
    newDrawing.date = backendDrawing.Datum.split("T")[0];
    newDrawing.id = backendDrawing.Id
    newDrawing.numbers = [];
    newDrawing.numbers.push(backendDrawing.z1);
    newDrawing.numbers.push(backendDrawing.z2);
    newDrawing.numbers.push(backendDrawing.z3);
    newDrawing.numbers.push(backendDrawing.z4);
    newDrawing.numbers.push(backendDrawing.z5);

    newDrawing.extraNumbers = [];
    newDrawing.extraNumbers.push(backendDrawing.ez1);
    newDrawing.extraNumbers.push(backendDrawing.ez2);

    return newDrawing;
}

export default {
    async getDrawings() {
        var response = await fetch(baseUrl)
        var backendDrawings = await response.json();

        return backendDrawings.map(convertToDrawing)
    }
}
