(function TagsOccurrence(d) {
	var o=Object.create(null),e=d.documentElement,x=d.createTreeWalker(e,1,null,false);
	while(e){
		var p=e.nodeName,e=1;
		if(p in o){e=o[p]+1};
		o[p]=e;
		e=x.nextNode()
	};
  console.debug('TagsOccurrence:\n%c'+JSON.stringify(o,null,1).replace(/[{\",}]/gi,''),'padding:12px');
})(document);
