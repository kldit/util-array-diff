// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
Object.defineProperty(Array.prototype, 'diff',
{
    enumerable: false,
    value: function (array)
    {
        return this.filter(function (i) { return array.indexOf(i) < 0; });
    }
});