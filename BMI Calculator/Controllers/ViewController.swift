import UIKit

class ViewController: UIViewController {
    
    
    @IBOutlet weak var heightLabel: UILabel!
    @IBOutlet weak var weightLabel: UILabel!
    @IBOutlet weak var heightSlider: UISlider!
    @IBOutlet weak var weightSlider: UISlider!
    
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
        let bmi = weight / (height * height)
       
    }
}

