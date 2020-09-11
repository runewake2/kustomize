const core = require('@actions/core');
const github = require('@actions/github');

const delimiter = ",";
const ignoreCheckFlag = "IGNORE_MODULE_SPAN";

try {
    // Read and parse inputs into usable data
    const directoryBlob = core.getInput('restricted-directories');
    const restrictedDirectories = splitDirectories(directoryBlob);

    // If there is only 1 or less directory they can not conflict. Skip checks.
    if (restrictedDirectories.length <= 1) {
        return;
    }

    // Retrieve PR info
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}

function splitDirectories(directoryBlob) {
    const split = directoryBlob.split(delimiter);
    // Trim the split directories of excess whitespace
    // This makes it possible to insert spaces in the directory list
    for(var i = 0; i < split.length; ++i) {
        split[i] = split[i].trim();
    }
    return split;
}