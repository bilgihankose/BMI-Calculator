import UIKit

class ViewController: UIViewController {
    
    
    @IBOutlet weak var heightLabel: UILabel!
    @IBOutlet weak var weightLabel: UILabel!
    @IBOutlet weak var heightSlider: UISlider!
    @IBOutlet weak var weightSlider: UISlider!
    
    
    var bmi: Float = 0.0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    @IBAction func heightValueChanged(_ sender: UISlider) {
        let height = String(format: "%.2F", sender.value)
        heightLabel.text = "\(height) m"
    }
    
    @IBAction func weightValueChanged(_ sender: UISlider) {
        let weight = String(format: "%.0F", sender.value)
        weightLabel.text = "\(weight) KG"
    }
    @IBAction func calculatePressed(_ sender: UIButton) {
        let height = heightSlider.value
        let weight = weightSlider.value
        bmi = weight / (height * height)
        self.performSegue(withIdentifier: "Result", sender:self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "Result" {
            let destinationVC = segue.destination as! ResultVC
            destinationVC.bmiValue = String(format: "%.1F", bmi)
        }
    }
}

