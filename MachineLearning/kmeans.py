# K-Means Clustering

# Importing the libraries
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
import pandas as pd
import json

targets = ("McDonald's", "Starbucks", "Swiss Chalet", "LCBO", "Longo's", "H&M", "Netflix", "Tim Hortons")

def removePunct(strings):
    punctuations = '''!()-[]{};: '"\,<>./?@#$%^&*_~'''
    # remove punctuation from the string
    no_punct = ""
    for char in strings:
       if char not in punctuations:
           no_punct = no_punct + char
    return no_punct


company = targets[0].lower()
company = removePunct(company)
print (company)


# Importing the dataset
dataset = pd.read_csv(company+'Data.csv')
dataset = dataset[['totalIncome', 'currencyAmount']]
X = dataset.iloc[:, :].values
# y = dataset.iloc[:, 3].values

# Splitting the dataset into the Training set and Test set
"""from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)"""

# Feature Scaling
"""from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X_train = sc_X.fit_transform(X_train)
X_test = sc_X.transform(X_test)
sc_y = StandardScaler()
y_train = sc_y.fit_transform(y_train)"""

# Using the elbow method to find the optimal number of clusters
wcss = []
for i in range(1, 11):
    kmeans = KMeans(n_clusters = i, init = 'k-means++', random_state = 42)
    kmeans.fit(X)
    wcss.append(kmeans.inertia_)
plt.plot(range(1, 11), wcss)
plt.title('The Elbow Method')
plt.xlabel('Number of clusters')
plt.ylabel('WCSS')
plt.show()


# Fitting K-Means to the dataset
kmeans = KMeans(n_clusters = 4, init = 'k-means++', random_state = 42)
y_kmeans = kmeans.fit_predict(X)

# Visualising the clusters
plt.scatter(X[y_kmeans == 0, 0], X[y_kmeans == 0, 1], s = 100, c = 'red', label = 'Cluster 1')
plt.scatter(X[y_kmeans == 1, 0], X[y_kmeans == 1, 1], s = 100, c = 'blue', label = 'Cluster 2')
plt.scatter(X[y_kmeans == 2, 0], X[y_kmeans == 2, 1], s = 100, c = 'green', label = 'Cluster 3')
plt.scatter(X[y_kmeans == 3, 0], X[y_kmeans == 3, 1], s = 100, c = 'cyan', label = 'Cluster 4')
#plt.scatter(X[y_kmeans == 4, 0], X[y_kmeans == 4, 1], s = 100, c = 'magenta', label = 'Cluster 5')
#plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s = 300, c = 'yellow', label = 'Centroids')
plt.title('Clusters of customers')
plt.xlabel('Annual Income (k$)')
plt.ylabel('Money Spent ($)')
plt.legend()
plt.show()

dataset['cluster'] = pd.DataFrame(y_kmeans)

# [{"totalIncome": 45555, "currencyAmount":445, "cluster":"Cluster 1: Low income customers and less amount spent"},{"totoalIncome": 5455, "moneySpent":4445, "cluster":"Cluster 1: Low income customers and less amount spent"},....]

dataset['cluster'] = dataset['cluster'].replace([0], "Cluster 1: Above average income customers").replace([1], "Cluster 2: Low income customers").replace([2], "Cluster 3: High income customers").replace([3], "Cluster 4: Average income customers")
dataList = dataset.to_dict('records')

with open('./enterpriseClusters/'+company+'.json', 'w') as f:
    json.dump(dataList, f)