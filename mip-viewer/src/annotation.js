/**
 * List of annotations.
 */
var annotations = [];

/**
 * Create a new annotation, add it to the list.
 */
function CreateAnnotation(id) {
    let annotation = Annotation(id);
    annotations.push(annotation);
    return annotation;
}

/**
 * Base factory function for annotations.
 */
function Annotation(annotationId) {
    let originalPosition = new THREE.Vector3();
    let renderPosition = new THREE.Vector3();

    return {
        id: annotationId,
        content: "",

        render: function (left, top) {
            var annotation = document.getElementById('annotation');
            document.getElementById('annotation-body').innerHTML = '<br><input id="input_description">';
            document.getElementById('annotation-foot').innerHTML = `<button onclick="saveAnnotation(${annotationId})">OK</button> <button onclick="cancelAnnotationCreation()">Cancel</button>`;
            this.setPosition(left, top);
            annotation.style.display = "block";
        },

        ok: function () {
            var input_description = document.getElementById('input_description').value;
            console.log("Input :" + input_description);
            document.getElementById('annotation').style.display = "none";
        },

        setOriginalPosition: function(value) {originalPosition.copy(value)},

        setPosition: function (left, top) {
            annotation.style.left = left + "px";
            annotation.style.top = top + "px";
        }
    }
}

function cancelAnnotationCreation() {
    hideAnnotationPopup();
}

function saveAnnotation(id) {
    let content = document.getElementById('input_description').value;
    console.log("data to save: " + content);
    let annotation = annotations.find(x => x.id == id);
    annotation.content = content;
    hideAnnotationPopup();
    
}

function showAnnotation(id) {
    let annotation = annotations.find(annotation => annotation.id == id);
    console.log("Annotation content :" + annotation.content);
  }

function hideAnnotationPopup() {
    document.getElementById('annotation').style.display = "none";
}