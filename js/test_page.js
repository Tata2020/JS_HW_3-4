var newDomTest = {
	 wrapper: function () {
	 		  var elementWrapper = document.createElement ('div');
			  elementWrapper.className = 'wrapper';
			  document.body.appendChild (elementWrapper);
			  },
	newTitle: function (tagNameTitle, tagClassTitle, tagContentTitle) {
			  var elementTitle = document.createElement (tagNameTitle);
			  elementTitle.className = tagClassTitle;
			  elementTitle.innerHTML = tagContentTitle;
			  var parent = document.body.querySelector('div');
			  parent.appendChild (elementTitle);
			  },
	newForm:  function (nameForm, textForm) {
		      var elementForm = document.createElement ('form');
		      elementForm.setAttribute ('name', nameForm);
		      elementForm.setAttribute ('method', 'POST');
		      elementForm.setAttribute ('action', '#');
		      var parent = document.body.querySelector('div');
			  parent.appendChild (elementForm);

			  var inputItem = document.createElement ('input');
			  inputItem.setAttribute ('type', 'submit');
			  inputItem.setAttribute ('value', textForm);
			  elementForm.appendChild  (inputItem);
			  },	  
	newList: function (tagContentList, tagContentListItem) {
			 var mainList = document.createElement ('ol');
			 var parent = document.querySelector('form');
			 parent.insertBefore (mainList, parent.children[0]);

			 for (var i = 0; i <= tagContentList.length - 1; i++) {
			   var elementMainList = document.createElement ('li');
			   elementMainList.className = 'list';
			   elementMainList.innerHTML = tagContentList[i];
			   mainList.appendChild (elementMainList);
			   
			   var elementList = document.createElement ('ul');
			   elementMainList.appendChild (elementList);
			   

		 	    for (var j = 0; j < tagContentListItem.length; j++) {
		 	  	  var listItem = document.createElement ('li');
				  listItem.className = 'list__item';
				  elementList.appendChild (listItem);

				  var inputItem = document.createElement ('input');
				  inputItem.setAttribute ('type', 'checkbox');
				  inputItem.id = 'check' + i + j;
				  inputItem.name ='question' + (i + 1);
				  inputItem.value = 'q'+ (i + 1) + 'v' + (i + 1);
				  listItem.appendChild  (inputItem);
				  
				  var labelItem = document.createElement ('label');
				  labelItem.setAttribute ('for', 'check' + i + j);
				  labelItem.innerHTML = tagContentListItem[j];
				  listItem.appendChild (labelItem);
				};
			  };
		}
			
};

newDomTest.wrapper ();

var tagClassTitle = 'title';
var tagContentTitle = 'Тест по программированию';
newDomTest.newTitle ('h1', tagClassTitle, tagContentTitle);

var textForm = 'Проверить мои результаты';
nameForm = 'test';
newDomTest.newForm (nameForm, textForm);

var tagContentList = ['Вопрос №1', 'Вопрос №2', 'Вопрос №3']; 
var tagContentListItem = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];
newDomTest.newList (tagContentList, tagContentListItem);