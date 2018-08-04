walk(document.body);

function walk(node) {
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType ) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			//console.log(node.parentElement.tagName.toLowerCase());
			switch(node.parentElement.tagName.toLowerCase()) {
				default:
					node.nodeValue = node.nodeValue.replace(/A/g, "ᐰ");
					break;
				case "script":
				case "style":
			}
	}
}
