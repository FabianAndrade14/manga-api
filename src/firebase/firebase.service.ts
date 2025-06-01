import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';

const serviceAccount = require('../config/firebase-adminsdk.json');

@Injectable()
export class FirebaseService {
    private db: FirebaseFirestore.Firestore;

    constructor() {
        if(!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
            });
        }
        this.db = admin.firestore();
    }

    getCollection(name: string) {
        return this.db.collection(name);
    }
}