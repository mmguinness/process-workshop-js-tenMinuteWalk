TASK
function - ten_minute_walk? & must return to start
Outout only: true / false
Input array with 'n', 's', 'e', 's'
Edge cases - you will not receive empty array or other digits.

ten_minute_walk?(directions)

To meet back at the starting point:
 n & s must be balanced 
 e & w must be balanced


INPUT                                                         | OUTPUT
['w', 's']                                                    | false   # tests for minimum 10 minutes walk
['w', 'w', 'w', 'w', 'w', 'e', 'e', 'e', 'e', 'e']            | true    # tests for minimum 10 minutes walk and e & w must be balanced
['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's']            | true    # tests for minimum 10 minutes walk and n & s must be balanced
['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']            | true    # tests for 10 mins & directions balance back to start(n&s && e&w must be balanced)
['w', 's', 'e', 'e', 'n', 'n', 's', 'n', 'e', 's', 'w', 'w']  | false   # tests for maximum 10 minutes walk
['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']            | false   # does not pass as not back to starting point (n&s && e&w must be balanced)
['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']            | false   # does not pass as not back to starting point (n&s && e&w must be balanced)


