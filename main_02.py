def totalCostTax(state, sum):
    if state == "CA":
        tax_amount = .075
        total_cost = sum * (1 + tax_amount)
        result = "Since you are from {}, the total cost will be: {}".format(state, total_cost)
        print(result)
    elif state == "MN":
        tax_amount = .095
        total_cost = sum * (1 + tax_amount)
        result = "Since you are from {}, the total cost will be: {}".format(state, total_cost)
        print(result)

totalCostTax("MN", 200)

totalCostTax("CA", 100)
        