Challenge:

Create a FIFO structure that has two types (cats and dogs)
Approach & Efficiency:

FIFO means queue, so I used my previously created Queue class
I created two instances of Queue inside the constructor of AnimalShelter, one for cats and one for dogs
With two queues, the dequeue method will work properly on each type
If we had one type, we would face a problem of having to traverse the queue to search for the desired type (the pref parameter), and this would oppose the FIFO structure as well
Solution:

run: npm test animal-shelter

![](https://i.ibb.co/3FrkVb7/ewertyu.png)