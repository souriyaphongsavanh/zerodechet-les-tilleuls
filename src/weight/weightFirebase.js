import Firebase, { WEIGHTS_REF, SUB_COLLECTION_REF }  from '../app/firebase'

class WeightFirebase {
  getWeight = uid => Firebase.doc(`${WEIGHTS_REF}/${uid}`)
  
  getWeightListBtwDates = async (uid, beginTimestamp, endTimestamp)  => {
    let result = []
  
    await Firebase.db.collection(WEIGHTS_REF)
    .doc(uid).collection(SUB_COLLECTION_REF)
    .where('startDate', '>=', beginTimestamp)
    .where('startDate', '<', endTimestamp)
    .orderBy('startDate')
    .get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        result.push({ id: doc.id, data: doc.data()  })
      })
    })
  
    return result
  }
  
  addWeight = data => {
    const collection = Firebase.collection(WEIGHTS_REF)
    return collection.add(data)
  }
}

export default new WeightFirebase()