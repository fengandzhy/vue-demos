/**
 * 1. v-if 一般都会用在具体的控件中, 例如<div v-if="isShow"> 或者<template v-if="!isShow">  它不能单独使用
 *
 * 2. <div v-if="isShow"> 和 <template v-if="!isShow"> 的区别就在于它会在外层包一个div 而template 就直接显示内容
 *
 * 3. 这里之所以写成这样v-on:click="loginType=loginType=='1'?'2':'1'" 是因为要赋值.
 *
 * 4. v-show和v-if 的区别就在于v-show只是操作css的display属性, 当它的值为false时display:none, 而v-if 它的为false就直接删除元素
 * 所以v-if 相比于v-show有更大的开销. 
 *
 * */