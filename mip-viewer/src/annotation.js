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

        setOriginalPosition: function(value) {originalPosition.copy(value)},
    }
}

function cancelAnnotationCreation() {
    hideAnnotationPopup();
}

function saveAnnotation(id) {
    let content = document.getElementById('input_description').value;
    let annotation = annotations.find(x => x.id == id);
    annotation.content = content;
    hideAnnotationPopup();
    
}

function getAnnotation(id) {
    let annotation = annotations.find(annotation => annotation.id == id);
    return annotation;
  }

function hideAnnotationPopup() {
    document.getElementById('annotation').style.display = "none";
}

function renderAnnotationPopup(annotation, left, top) {
        let annotationPopup = document.getElementById('annotation');
        if (annotation.content == "") {
            document.getElementById('annotation-body').innerHTML = '<br><input id="input_description"><br><br>';
            document.getElementById('annotation-foot').innerHTML = `<button onclick="saveAnnotation(${annotation.id})">Save</button> <button onclick="cancelAnnotationCreation()">Cancel</button>`;
        } else {
            document.getElementById('annotation-body').innerHTML = `<br>${annotation.content}<br><br>`;
            document.getElementById('annotation-foot').innerHTML = `<button onclick="hideAnnotationPopup()">Ok</button>`;
        
        }
        setAnnotationPopupPosition(left, top)
        annotationPopup.style.display = "block";
}

function setAnnotationPopupPosition(left, top) {
    let annotationPopup = document.getElementById('annotation');
    annotationPopup.style.left = left + "px";
    annotationPopup.style.top = top + "px";
}