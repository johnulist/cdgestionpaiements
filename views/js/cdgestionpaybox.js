$(document).ready(function()
{
    $("#fileuploader").uploadFile({
        url:linkUpload,
        fileName:"csvPaybox",
        allowedTypes:"csv"
    });
});