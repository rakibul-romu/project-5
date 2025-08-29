1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:

1.getElementById → এটি শুধু id দিয়ে খোঁজে, সবসময় একটিমাত্র element দেয়।

২.getElementsByClassName →এটি class name দিয়ে খোঁজে, একাধিক element দিলে HTMLCollection আকারে ফেরত দেয়।

3.querySelector → CSS selector দিয়ে খোঁজে, প্রথম মিল পাওয়া একটা element দেয়।

4.querySelectorAll →এটি CSS selector দিয়ে সব মিল পাওয়া element দেয়।



2. How do you **create and insert a new element into the DOM**?

Ans:   প্রথমে document.createElement() দিয়ে element তৈরি করতে হবে। তারপর তাতে লেখা/attribute দিতে হবে। তারপর যেই parent element-এ বসাতে চাই সেটা খুঁজে বের করতে হবে। তারপর appendChild() বা insertBefore() দিয়ে DOM-এ বসিয়ে দিতে হবে।


3. What is **Event Bubbling** and how does it work?

Ans: 
Event Bubbling হলো যখন আমি কোনো ছোট element (যেমন button) এ ক্লিক করি, সেই ক্লিক ইভেন্ট ধাপে ধাপে উপরের parent element-এ চলে যায়। মানে ইভেন্টটা “বুদবুদ” হয়ে উপরে উঠে যায়।
এটি প্রথমে button এ চাপ লেগে তার parent  এর কাছে যা সে আবার সেখান থেকে তার parent এর কাছে যায় এভাবে root  পর্যন্ত বুদ বুদ এর মতো করে উপরে উঠে যায়।


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: Event Delegation হলো JavaScript-এ এমন একটি পদ্ধতি যেখানে আমরা child element-এর বদলে parent element-এ ইভেন্ট হ্যান্ডলার বসাই। তারপর ইভেন্ট bubble হয়ে আসার সময় চেক করে ঠিক কোন child element-এ ইভেন্ট ঘটেছে তা শনাক্ত করি।

উপকারিতা: এইটার জন্য কম কোড করতে হয়। ডাইনামিক element-এর জন্য সুবিধজনক।ও মেমরি সাশ্রয় করে

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:
১. preventDefault()	-ডিফল্ট ব্রাউজার আচরণ বন্ধ করে।

২.stopPropagation()	-ইভেন্ট বাবার/ancestor এলিমেন্টে পৌঁছানো বন্ধ করে।
