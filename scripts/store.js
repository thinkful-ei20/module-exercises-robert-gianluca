
/* global cuid, Item */

const store = (function() {
	const items = [
		// { id: cuid(), name: 'apples', checked: false },
		// { id: cuid(), name: 'oranges', checked: false },
		// { id: cuid(), name: 'milk', checked: true },
		// { id: cuid(), name: 'bread', checked: false }
	];

	const hideCheckedItems = false;

	const searchTerm = '';

	const findById = function(id) {
		return this.items.find(item => item.id === id);
	};

	const addItem = function(name) {
		try {
			Item.validateName(name);
			this.items.push(Item.create(name));
		} catch(e) {
			console.error(`Cannot add name: ${e.message}`);
		}
		return `Item ${name} added successfully`;
	};

	const findAndToggleChecked = function(id) {
		const item = this.findById(id);
		if(item) {
			item.checked = !item.checked;
		}
	};

	const findAndUpdateName = function(id, newName) {
		try {
			Item.validateName(newName);
			const item = this.findById(id);
			item.name = newName;
		}
		catch(e) {
			console.error(`Cannot update name: ${e.message}`);
		}
	};

	const findAndDelete = function(id) {
		const index = this.items.findIndex(item => item.id === id);
		this.items.splice(index, 1);
	};

	return {
		items,
		addItem,
		findAndToggleChecked,
		findAndUpdateName,
		findById,
		findAndDelete,
		hideCheckedItems,
		searchTerm,
	};

}());
