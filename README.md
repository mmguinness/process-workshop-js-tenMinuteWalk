# js-process-workshop

## Take a ten minute walk

Create a function that will return true if the walk will take you exactly ten minutes and will return you to your starting point.

### Requirements

You are meeting a friend in New York City, where all roads are laid out in a perfect grid. You arrived ten minutes too early to the appointment, so you decided to take the opportunity to go for a short walk.<br>
The city provides its tourists with a Walk Generating App on their phones -- every time you press the button it sends you an array of one-letter strings representing directions to walk. **e.g. ['n', 's', 'w', 'e']**

You always walk one block at a time in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

_Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!)._

#### Acceptance Criteria
```ruby
ten_minute_walk?(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']) # => true
ten_minute_walk?(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']) # => false
ten_minute_walk?(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']) # => false
ten_minute_walk?(['w', 's']) # => false
```

### My Process

TASK
* function - ten_minute_walk? & must return to start
* Outout only: true / false
* Input array with 'n', 's', 'e', 's'
* Edge cases - you will not receive empty array or other digits.
* ten_minute_walk?(directions)

* To meet back at the starting point:
  - n & s must be balanced 
  - e & w must be balanced


INPUT | OUTPUT 
- ['w', 's']                                                    
- false   # tests for minimum 10 minutes walk

- ['w', 'w', 'w', 'w', 'w', 'e', 'e', 'e', 'e', 'e']            
- true    # tests for minimum 10 minutes walk and e & w must be balanced

- ['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's']            
- true    # tests for minimum 10 minutes walk and n & s must be balanced

- ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']            
- true    # tests for 10 mins & directions balance back to start(n&s && e&w must be balanced)

- ['w', 's', 'e', 'e', 'n', 'n', 's', 'n', 'e', 's', 'w', 'w']  
- false   # tests for maximum 10 minutes walk

- ['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']            
- false   # does not pass as not back to starting point (n&s && e&w must be balanced)

- ['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']            
- false   # does not pass as not back to starting point (n&s && e&w must be balanced)


