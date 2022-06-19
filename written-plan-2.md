# Multimedia Authoring 2 - Crushing Bugs Assignment

This is for the 2nd problem.

2. The puzzle game ends with all the puzzles in the drop zone on reset or choosing a new puzzle

The second problem is the drop zone has been placed all puzzles, and buttons of other puzzles are only for switching to specific puzzle pictures. However, the puzzles from the last game are still remained on the puzzle board unchanged. There are several attempt to fix this problem, in term of removing child on the drop zone, and move the puzzles pictures back to the original drag zone when any puzzle buttons were clicked.

Research of remove child, if function for counting elementchild and return, nodechild, true/ false and let function have been explored. The main focus I was on the "theThumbnails" and "gameBoard" because it was either change some javascript from the gameBoard or the puzzle buttons. Also, I tried to add a dragZone tag to see if it helped this problem. 

Evenetually, still I stick with the plan to see what can I do on the gameboard where is the finished puzzles stay. Some notes from Trevor to mentioned that remove child, I tried remove all children function that worked, but it even removed the dotted line. So, it is a half way through, the other remove child didn't work for adding parent and child name. Also, there are rename parent/ child name on js file that can use. I also try to add a funtion and extend the "theThumbnails" handling for the move of puzzle back to drag zone, but failed. 

Finaly, I try to use the same if function from the first problem, to experiment if the childcount on gameboard is greater than 0, any one puzzle on the board, then users can click the 4 puzzle buttons to reset it. To do so, I set a false function for that, and input the if gameBoard.childElementCount > 0, then it return to true. Well, not succeed but it doesn't have error, seems to... not too bad!



:no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth:  :kissing_smiling_eyes: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth:

# MIT License

Copyright 2022 Yukki Ngai

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

:no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth::no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth:  :kissing_smiling_eyes: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth:

# Contact

Free feel to contact me if you want to work any fun project with me :kissing_smiling_eyes:

email: y_ngai@fanshaweonline.ca

# About me

Unprofessional web design student trys to look professional.

I can chat with weirdo, please try to work with me if you are lol

I wish I am abnormal...
