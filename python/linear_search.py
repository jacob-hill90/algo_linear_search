def linear_search(value_to_find, array_to_search_through):
    found = None
    for i in range(len(array_to_search_through)):
        if value_to_find == array_to_search_through[i]:
            found = i
            
    return found

def linear_search_global(value_to_find, array_to_search_through):
    found = []
    for i in range(len(array_to_search_through)):
        if value_to_find == array_to_search_through[i]:
            found.append(i)
            
    return found