'use strict';

//01_ডমের নোড গুলাকে querySelector দিয়ে ধরলাম
let form = document.querySelector('#task_form');
let taskInput = document.querySelector('#new_task');
let filter = document.querySelector('#task_filter');
let taskList = document.querySelector('ul');
let cleanBtn = document.querySelector('#clear_task_btn');

//02_প্রত্যেকটা নোডে কি ইভেন্ট ঘটবে সেই function declear করা
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
cleanBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTask);

//03_ফাংশন ডেফিনেশন :: 01_addTask(event){...}
function addTask(event) {
	if (taskInput.value === '') {
		alert('Add a task');
	} else {
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(taskInput.value + ' '));
		taskList.appendChild(li);
		let link = document.createElement('a');
		link.setAttribute('href', '#');
		link.innerHTML = 'X';
		li.appendChild(link);
		storeTaskInLocalStorage(taskInput.value);
		taskInput.value = '';
	}
	event.preventDefault();
}

//03_ফাংশন ডেফিনেশন :: 02_removeTask(event){...}
function removeTask(event) {
	if (event.target.hasAttribute('href')) {
		if (confirm('Are you sure?')) {
			let ele = event.target.parentElement;
			ele.remove();
			removFromLS(ele);
		}
	}
}

//03_ফাংশন ডেফিনেশন :: 03_clearTask(event){...}
function clearTask(event) {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
	localStorage.clear();
}

//03_ফাংশন ডেফিনেশন :: 04_filterTask(event){...}
function filterTask(event) {
	let text = event.target.value.toLowerCase();
	document.querySelectorAll('li').forEach(task => {
		let item = task.firstChild.textContent;
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
}

//03_ফাংশন ডেফিনেশন :: 05_storeTaskInLocalStorage(task){...}
function storeTaskInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

//03_ফাংশন ডেফিনেশন :: 06_getTask(){...}
function getTask() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach(task => {
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(task + ' '));
		taskList.appendChild(li);
		let link = document.createElement('a');
		link.setAttribute('href', '#');
		link.innerHTML = 'X';
		li.appendChild(link);
	});
}

//03_ফাংশন ডেফিনেশন :: 07_removFromLS(taskItem){...}
function removFromLS(taskItem) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	let li = taskItem;
	li.removeChild(li.lastChild);
	tasks.forEach((task, index) => {
		if (li.textContent.trim() === task) {
			tasks.splice(index, 1);
		}
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

//forEach(প্রত্যেকটা আইটেম, ইন্ডেক্স নাম্বার, ফুল এরে)
//splice(ইন্ডেক্স নাম্বার, কত গুলা আইটেম রিমুভ হবে)