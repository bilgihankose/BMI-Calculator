//
//  ResultVC.swift
//  BMI Calculator
//
//  Created by Bilgihan Köse on 24.05.2020.
//  Copyright © 2020 Bilgihan Kose. All rights reserved.
//

import UIKit

class ResultVC: UIViewController {

    @IBOutlet weak var bmiLabel: UILabel!
    @IBOutlet weak var adviceLabel: UILabel!
    
    var bmiValue: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        bmiLabel.text = bmiValue
    }
    
    @IBAction func recalculatePressed(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
    
  
}
