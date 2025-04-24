### Typescript
- generate js file แล้วไป Run ด้วย node แต่ถ้าไม่อยากทำหลาย step ให้ลง lib
    npm install -g ts-node typescript '@types/node'

## identifier 
- ถ้าใช้ตัวเลขผสม ห้ามขึ้นต้นด้วยตัวเลข
- ใช้ได้แค่ _ หรือ $
- uniqe
- case sensitive

## Keyword
![keyword of tyscript](image.png)

## Google TS Style Guid
- UpperCamelCase -> Class/ interface/ type/ enum decorator/ type parm
- lowerCamelCase -> Var / parm / func / method / property /module /alias
- CONSTANT_CASE -> global const value, including enum values
- Comment with //

# Data type 
- any
- built-in str, bool etc.
- User-defined ถูกสร้างจาก class ที่เราสร้างมา ex. Array enum
- enum คือ data type ที่กำหนดขึ้นมาเองนั้นแหละ แล้วจะเรียกใช้อะไรก็ว่าไป

# let var const
- var จัดการยาก เปลี่ยนแปลงได้ตลอดเหมือนประกาศเป็น global เรียนอก function ได้
- let ต้องเรียกภายใน ฟังก์ชั้น คุม scope การเปลี่ยนแปลงได้ง่ายกว่า
- const ค่าคงที่ธรรมดา ประกาศทิ้ง อะไรที่คิดว่าไม่เปลี่ยน

# Operator
- === เทียบว่าตรงทั้งข้อมูล และ type
- +=  หรือ -=  etc. หลังจาก + แล้วนำข้อมูลใส่กลับเข้าตัวแปรเดิม
- % หารเอาเศษ

# Loop
- for of loop เอาของใน array มาใส่ตัวแปร
- for in loop เอา index ของ array มาใส่ตัวแปร

# function

# สรุป + OOP
- constructure ฟังก์ชั่นสำหรับ สร้างค่าเริ่มต้นให้กับ obj
- constructure overload ?
- getter
- setter 
- class = tempalte มีแต่โครงสร้าง
- object = สิ่งที่ถูกสร้างจาก class  เอาไว้ใชงานจริง
- method = function ที่ อยู่ใน class ใช้โดย obj
- abstract

# Module