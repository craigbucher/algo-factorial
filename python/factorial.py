def factorial(num):
	result = 1
	if num == 0:
		return 1
	else:
		while num >= 1:
			result *= num
			num -= 1
	return result
# with recurison:
#	return 1 if (n == 1 or n == 0) else n * factorial(n - 1);